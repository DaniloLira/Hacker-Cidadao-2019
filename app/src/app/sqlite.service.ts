import { Platform } from "@ionic/angular";
import { Injectable } from "@angular/core";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite/ngx";

@Injectable({
  providedIn: "root"
})
export class SqliteService {
  databaseObj: SQLiteObject;
  name_model: string = "";
  row_data: any = [];
  tableData = [
    "	idAcidente INT NOT NULL AUTO_INCREMENT, latitude INT,longitude INT,timestamp BIGINT",
    "id INT NOT NULL AUTO_INCREMENT,idAcidente INT NOT NULL,tipoAcidente INT,tipoVeiculoInfra VARCHAR(255),tipoVeiculoVit VARCHAR(255),airbag INT,capacete INT,cinto INT",
    "	id INT NOT NULL AUTO_INCREMENT,idAcidente INT NOT NULL,sexo BOOLEAN,idade INT,tipoEnvolvido INT,estadoFisico INT"
  ];

  constructor(private sqlite: SQLite, private plt: Platform) {
    this.plt.ready().then(() => {
      const conn = this.sqlite.create({
        name: "acidentes",
        location: "default" // the location field is required
      });
      console.log("test");
      conn.then((db: SQLiteObject) => {
        this.databaseObj = db;
      });
    });
  }

  createDB() {
    this.sqlite
      .create({
        name: "acidentes",
        location: "default"
      })
      .then((db: SQLiteObject) => {
        this.databaseObj = db;
      })
      .catch(e => {
        console.log("error " + JSON.stringify(e));
      });
  }
  createTable(table, data) {
    this.databaseObj
      .executeSql("CREATE TABLE IF NOT EXISTS " + table + " (" + data + ")", [])
      .then(() => {
        console.log("sucess");
      })
      .catch(e => {
        console.log("error " + JSON.stringify(e));
      });
  }

  adjustRow(jsonObject) {
    let arrayKeys = [];
    let arrayValues = [];
    for (var k in jsonObject) {
      arrayKeys.push(k);
      arrayValues.push(jsonObject[k]);
    }
    return { keys: arrayKeys.join(","), values: arrayValues.join(",") };
  }

  insertRow(table, data) {
    data = this.adjustRow(data);
    this.databaseObj
      .executeSql(
        "INSERT INTO " +
          table +
          " (" +
          data.keys +
          ') VALUES ("' +
          data.values +
          '")',
        []
      )
      .then(() => {
        return true;
      })
      .catch(e => {
        alert("error " + JSON.stringify(e));
      });
  }

  getRows(table, id) {
    this.databaseObj
      .executeSql("SELECT * FROM " + table + " WHERE idAcidente == " + id, [])
      .then(res => {
        this.row_data = [];
        if (res.rows.length > 0) {
          console.log(res.rows);
          for (var i = 0; i < res.rows.length; i++) {
            this.row_data.push(res.rows.item(i));
          }
        }
      })
      .catch(e => {
        alert("error " + JSON.stringify(e));
      });
  }
}
