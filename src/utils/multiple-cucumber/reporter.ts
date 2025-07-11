import { getBrowserVersion, getSystemInfo } from '../testUtils'
import { SystemOs } from '../constants'
import { updateFavIcon } from '../reportUtils'
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import advancedFormat from 'dayjs/plugin/advancedFormat';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const report = require('multiple-cucumber-html-reporter')

/**
 * Generate the Multiple Cucumber Report
 * Total Test cases, time, OS, Browser Version are included
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function generateReport () {
    const browserVersion = await getBrowserVersion()
    const systemInfo = await getSystemInfo()
    report.generate({
        jsonDir: './test-results/cucumber-results/',
        reportPath: './test-results/multiple-cucumber/',
        reportName: 'ADT Security Suite',
        pageTitle: 'ADT Report',
        openReportInBrowser: 'true',
        pageFooter: ' <div style="padding-top: 100px; display: flex; justify-content: center; align-items: center; height: 100%;">\n' +
            '    <p style="text-align: center;">Copyright ©2023 ADT Inc.</p>\n' +
            '  </div>',
        displayDuration: 'true',
        durationInMs: 'true',
        disableLog: 'true',
        metadata: {
            browser: {
                name: 'chrome',
                version: browserVersion
            },
            device: systemInfo.model,
            platform: {
                name: SystemOs[systemInfo.os as keyof typeof SystemOs],
                version: systemInfo.release
            }
        },
        customData: {
            title: 'ADT-Take-Home Test Automation',
            data: [
                { label: 'Project', value: 'ADT Security' },
                { label: 'Release', value: '1.2.3' },
                { label: 'Cycle', value: 'B11221.34321' },
                { label: 'Execution Start Time', value: await getCurrentDate() },
                { label: 'Execution End Time', value: await getCurrentDate() }
            ]
        }
    })
}

/**
 * This function generate the report and async way update the favicon icon
 */
generateReport().then(async () => {
    await updateFavIcon()
}).catch(error => {
    console.error('Error generating the report:', error)
})

/**
 *Get Current date on format Jul 3rd 2025, 04:15 PM EST
 */
async function getCurrentDate(): Promise<string> {
    dayjs.extend(utc);
    dayjs.extend(timezone);
    dayjs.extend(advancedFormat);
    return dayjs().tz('America/New_York').format('MMM Do YYYY, hh:mm A [EST]');
}