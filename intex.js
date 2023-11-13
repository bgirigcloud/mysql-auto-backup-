const {google} = require("googleapis");
const {auth} = require("google-auth-library");
var sqladmin = google.sqladmin("v1beta4");

exports.exportDatabase = (_req, res) => {
  async function doBackup() {
    const authRes = await auth.getApplicationDefault();
    let authClient = authRes.credential;
    var request = {
      // Project ID 
      project: "",
      // Cloud SQL instance ID
      instance: "",
      resource: {
        // Contains details about the export operation.
        exportContext: {
          // This is always sql#exportContext.
          kind: "sql#exportContext",
          // The file type for the specified uri (e.g. SQL or CSV)
          fileType: "SQL", 
          /** 
           * The path to the file in GCS where the export will be stored.
           * The URI is in the form gs://bucketName/fileName.
           * If the file already exists, the operation fails.
           * If fileType is SQL and the filename ends with .gz, the contents are compressed.
       */
      uri:``,
      /**
       * Databases from which the export is made.
       * If fileType is SQL and no database is specified, all databases are exported.
       * If fileType is CSV, you can optionally specify at most one database to export.
       * If csvExportOptions.selectQuery also specifies the database, this field will be ignored.
       */
      databases: [""]
    }
  },
  // Auth client
  auth: authClient
};

// Kick off export with requested arguments.
sqladmin.instances.export(request, function(err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
  res.status(200).send("Command completed", err, result); 
}
 ); 
  } 
  doBackup(); 
};
