import {app, BrowserWindow} from 'electron';
import path from 'path';
import { exec } from 'child_process';


const executeJar = ()=> {
    const jarPath = path.join(__dirname , 'target/App.jar');

    exec(`start java -jar ${jarPath}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error al ejecutar el .jar: ${error}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}

app.on("ready", () => {
    executeJar();
    const mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadFile(path.join(app.getAppPath()) + "/dist-react/index.html"); //producción no?
})
