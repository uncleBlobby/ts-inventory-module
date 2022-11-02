const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('inventory.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log(`Connected to the database!`);
});

db.serialize(() => {
    db.run("CREATE TABLE if not exists inventory (uuid TEXT)", (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log(`Created table if didn't exist!`);
    });

    const stmt = db.prepare("INSERT INTO inventory VALUES (?)", (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log(`Inserting into table...`);
    });

    for (let i = 0; i < 10; i++) {
        console.log(`i = ${i}`);
        stmt.run("Ipsum " + i);
    }
    stmt.finalize((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log(`No errors yet!`);
    });

    db.each("SELECT rowid AS id, uuid FROM inventory", (err, row) => {
        if (err) {
            return console.error(err.message);
        }
        console.log(row.id + ": " + row.uuid);
    });
});

db.close();