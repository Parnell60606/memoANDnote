/**
 * js 文件下使用這個做類型提示
 * @type import('naive-ui').GlobalThemeOverrides
 */

const lightBrown = "#F0F0EAFF"


const themeOverrides = {
    common: {
        // primaryColor: '#F0F0EA'
        primaryColor: '#A05C18FF'
    },
    Layout: {
        "textColor": "rgba(0, 204, 255, 1)",
        "textColorInverted": "rgba(152, 58, 87, 1)"
    },
    Button: {
        // textColor: '#FF0000'
        textColor: '#ffffff',
        "colorHover": "#FF000000"

    },
    "Dialog": {
        "padding": "50px 40px 40px 50px",
        "borderRadius": "15px"

    },
    "Card": {
        // "colorModal": lightBrown,
        "colorModal": "#FFFFFFDD",
        "borderRadius": "15px"
    },
    // 彈出訊息 (對話框)
    "Popover": {
        "color": "#363B4B88",
        "boxShadow": "0",
        "dividerColor": "rgb(239, 239, 245)",
        "textColor": "rgba(255, 255, 255, 1)",
        "padding": "12px 24px",
        "borderRadius": "10px"

    },
    Select: {
        peers: {
            InternalSelection: {
                textColor: '#FF0000'
            }
        }
    }
    // ...
}

// Naive UI 右下角調整主題變量

export default themeOverrides