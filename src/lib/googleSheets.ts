import { google } from "googleapis";

export async function getGoogleSheetsClient() {
  try {
    // Parse the service account credentials from environment variable
    const credentials = process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS;

    if (!credentials) {
      console.warn(
        "Google Sheets integration not configured - missing credentials"
      );
      return null;
    }

    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(credentials),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    return sheets;
  } catch (error) {
    console.error("Error initializing Google Sheets client:", error);
    return null;
  }
}

/**
 * Append a row to a Google Sheet
 */
export async function appendToSheet(
  spreadsheetId: string,
  range: string,
  values: string[][]
): Promise<boolean> {
  try {
    const sheets = await getGoogleSheetsClient();

    if (!sheets) {
      return false;
    }

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    });

    console.log("Successfully appended to Google Sheets:", response.data);
    return true;
  } catch (error) {
    console.error("Error appending to Google Sheets:", error);
    return false;
  }
}

/**
 * Append invite request data to Google Sheets
 */
export async function submitInviteToSheets(data: {
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  dialCode: string;
}): Promise<boolean> {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

  if (!spreadsheetId) {
    console.warn(
      "Google Sheets integration not configured - missing spreadsheet ID"
    );
    return false;
  }

  const timestamp = new Date().toISOString();
  const fullPhone = data.phone ? `${data.dialCode}${data.phone}` : "";

  // Prepare the row data
  const values = [
    [
      timestamp,
      data.name,
      data.email,
      fullPhone,
      data.countryCode,
      data.dialCode,
    ],
  ];

  return await appendToSheet(
    spreadsheetId,
    "Sheet1!A:F", // Adjust sheet name and range as needed
    values
  );
}
