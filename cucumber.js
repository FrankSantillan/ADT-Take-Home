module.exports = {
    default: [
        '--require-module', 'ts-node/register',
        '--require', 'src/features/step_definitions/*.ts',
        'src/features/*.feature'
    ]
};