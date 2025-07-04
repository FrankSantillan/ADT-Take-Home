import fs from 'fs'
import path from 'path'

export const updateFavIcon = async (): Promise<any> => {
    console.log(__dirname)
    const iconFolder = '../../test-results/multiple-cucumber/icons'
    const folderFullPath = path.resolve(__dirname, iconFolder)
    const iconFile = './multiple-cucumber/icons/adt-favicon.ico'
    const iconFullPath = path.resolve(__dirname, iconFile)
    const iconPath = './icons/adt-favicon.ico'
    if (!fs.existsSync(folderFullPath)) {
        fs.mkdirSync(folderFullPath)
    }
    fs.copyFileSync(iconFullPath, folderFullPath + '/adt-favicon.ico')
    const reportPath = './test-results/multiple-cucumber/index.html'

    const featurePath = './test-results/multiple-cucumber/features'
    const files = fs.readdirSync('./test-results/multiple-cucumber/features')
    const filesToProcess = files.map(file => `${featurePath}/${file}`)
    filesToProcess.push(reportPath)
    filesToProcess.forEach(file => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err != null) {
                return console.error(err)
            }
            const result = data.replace('<head>', `<head> <link rel="icon" href="${file.includes('feature') ? `../${iconPath}` : iconPath}"  type="image/x-icon" />`)
            fs.writeFile(file, result, 'utf8', (err) => {
                if (err != null) return console.error(err)
            })
        })
    })
}