declare namespace NodeJS {
    interface ProcessEnv {
        BROWSER: "chromium"
        TEST_TIMEOUT: "5000"
        HEADLESS: "true"
    }
}