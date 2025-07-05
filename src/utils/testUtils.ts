import si from 'systeminformation'
import { isNil } from 'lodash'
import {chromium, firefox, webkit} from "playwright";
import {SystemInfo} from "../../types";
/**
 * Define the structure of the vegetable inventory with specific quantities
 */
type Inventory = {
    cucumbers: number;
    carrots: number;
    salads: number;
};

/**
 * This allows each scenario to maintain its own isolated inventory state
 */
export interface InventoryVegetables {
    inventory: Inventory;  // Holds the current scenario's inventory data
}

/**
 * Retrieves the version of the specified browser type.
 * @returns {Promise<string>} The version of the browser.
 */
export const getBrowserVersion = async (): Promise<string> => {
    // Determine the browser type from the environment variable or default to 'chromium'.
    const browserType = !isNil(process.env.BROWSER) ? process.env.BROWSER : 'chromium'
    console.log(browserType)

    // Initialize the browser variable.
    let browser

    // Launch the browser based on the specified type.
    // @ts-ignore
    switch (browserType.toLowerCase()) {
        case 'chrome':
            browser = await chromium.launch({ headless: true, channel: 'chrome' })
            break
        case 'chromium':
            browser = await chromium.launch({ headless: true })
            break
        case 'firefox':
            browser = await firefox.launch({ headless: true })
            break
        case 'webkit':
            browser = await webkit.launch({ headless: true })
            break
        case 'msedge':
            browser = await chromium.launch({ headless: true })
            break
        default:
            throw new Error(`Unsupported browser: ${browserType}`)
    }
    // Get the version of the browser.
    const version = browser.version()

    // Close the browser instance.
    await browser.close()

    // Return the version of the browser.
    return version
}

/**
 * Retrieves system information including brand, model, OS, and release.
 * @returns {Promise<SystemInfo>} - A promise that resolves to an object containing system information.
 * @throws Will throw an error if there's an issue fetching the system information.
 */
export const getSystemInfo = async (): Promise<SystemInfo> => {
    try {
        const system: any = await si.system()
        const osInfo: any = await si.osInfo()
        return { brand: system.brand, model: system.model, os: osInfo.distro, release: osInfo.release }
    } catch (error) {
        console.error('Error fetching system information:', error)
        // You might want to throw an error or return a default value here.
        throw error
    }
}
