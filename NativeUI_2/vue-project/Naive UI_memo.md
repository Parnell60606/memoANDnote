# Naive UI 
## 要注意ㄉ地方 
+ 文字 color 均没有使用对应类型的 color ,而是 contentTextColor, titleTextColor <a href="https://github.com/TuSimple/naive-ui/issues/1495"> 來源</a>
+ 使用 xicons 作為圖標庫
+ 樣式可以暴力外連scss直接蓋掉
+ 響應式 (RWD)部分除了Grid以外都很微妙
+ `<router-view />` 也要用 `<n-message-provider>` 太麻煩ㄌㄅ....

+ 很多props的值只能靠底下回傳的值來改 why????

+ props 開頭有 : 沒 : 到底差在哪???



<br><br><br>

# 主題變量
<a href="https://www.naiveui.com/zh-CN/dark/docs/customize-theme">調整主題（官方文件）</a>  

1. 新增 theme.js檔案  
2. 把這個複製上來在修改 ↓↓
- ```js  
    import { NConfigProvider } from 'naive-ui'

  /**
   * js 文件下使用这个做类型提示
   * @type import('naive-ui').GlobalThemeOverrides
   */
  const themeOverrides = {
    common: {
      primaryColor: '#FF0000'
    },
    Button: {
      textColor: '#FF0000'
    },
    Select: {
      peers: {
        InternalSelection: {
          textColor: '#FF0000'
        }
      }
    }
  }
    export default themeOverrides

    ```  
    - 有要調整的去官方文件右下角輸出再導入

3. `App.vue`中引入`theme.js`  
    - ```js 
        import themeOverrides from './assets/theme.js'
        ```
    - `<n-config-provider>`標籤中加入
`:theme-overrides=“themeOverrides”` 此props
       ```html
        <template>
            <n-config-provider :theme-overrides="themeOverrides">
            <my-app />
            </n-config-provider>
        </template>
        ```
        - `:theme` 主題變量
        - `:theme-overrides` 主題變量覆蓋

<hr>

### 變量名稱
+ textColor 文字顏色
+ textColorInverted 文字顏色反轉



<br><br><br>

# n-config-provider  
-  `inline-theme-disabled` 是否禁用行內css樣式 (非響應式)
- `preflight-style-disabled` 是否禁止默認css (主題完全可控制) (響應式)

<br><br><br>

# n-layout  
有點類似 Bootstrap 的 .container 和簡單版本的 .row .col
## prop
- `:native-scrollbar="false"` 是否使用html內建網頁卷軸  
 ( false使用naive ui 內建的卷軸 )
- `bordered` 邊框
- `has-sider` 這個組件的子元件 橫排有沒有複數或並排的 layout (這個組件內部有沒有siderbar) 
    - siderbar 要把這個prop放在父元件  

- `default-collapsed` 預設摺疊

- `content-style`  要在 layout 和 layout-sider 上設置 padding 時的prop (直接設置padding會跑版)
    - 好像只能寫成props (不能寫在css style上?)
    - ```css
        content-style="padding: 24px;" 
        ```

- `position` 設定後可以在區塊內做卷軸 (height超過容器高度就會有卷軸)；上下左右未設定的話，預設 top:0; button:0; left:0; right:0;
    - ```css
        position="absolute"
        ```
        - 母元素記得設定成相對定位
        - ```css
            /* 母元素 */
            style=" position: relative;
            ```

- ? 不知道為什麼用`min-width: 500px;`才能改寬度大小


<br><br><br>

# n-data-table 數據表格
我拿來做後台的數據渲染
## props  
-  :max-height="250"  這樣設定就可以有捲軸  
    - 不用另外做 scrollbar
    - 可以固定 thead 表頭欄位  
  
- `striped` 和 tr:nth-child(even) 改偶數行的顏色有一樣的效果
- `n-dropdown` 右鍵菜單  (可以44看  ㄅ用特別放編輯欄位)

<br><br><br>


# n-grid 網格
  要左右置中的話，總 cols 網格數要 `+2` ，第一個子元件加上 `:offset="1"`  
  ```html
    <!-- pug -->
     n-grid (:cols:"6")
        n-gi (span:"2" :offset="1")
        n-gi (span:"2")
```
- 有響應式的props， 值如果只有單數(沒有其他斷點的值)的話開頭要放 `:`

## props 
- `x-gap` 橫排的間隔   (*ResponsiveDescription*)
  ```  
  :x-gap="12"
  ```

- `y-gap`  直排的間隔  (*ResponsiveDescription*)
- `item-responsive`  n-gi 是不是響應式
- `responsive`  響應式是根據 自身大小 (預設:'self') 還是根據 視窗大小 ('window') 

+ n-grid 一定要包 `n-gi` ( n-grid-item 的縮寫 ) 才能生效
  - # n-grid-item 網格列表
    ## props
    - `span` 佔據的網格數   (*ResponsiveDescription*)
      ```
      span="0 400:1 600:2 800:3"
      ```
    - `offset` 往左偏移幾格


# n-space  
拿來做懶人版彈性盒的東西
## props

- `justify` 主軸對齊(預設左右對齊)
  ```html
  <n-space justify=" space-between">
    左
    右
  </n-space>
  ```

- `vertical` (垂直對齊)
- `size` 子元件 間格大小 
  - 'small' | 'medium' | 'large' | number | [number, number]
  - 用 nunber 的話 ， props前面要加 `:`
  ```  
  :size="50"
  ```

<br><br>

# n-divider 分隔線

## props
- `vertical` 垂直的分隔線


<br><br>

# n-button 按鈕
## props

- `type`  套用該類型的按鈕顏色/類型 
- `ghost` 透明背景按鈕 (有線條框)
  ```html
  <n-button type="primary">
      Primary
    </n-button>
    ```

- `round` 圓角按鈕


<br><br><br>

# n-modal
我是拿來做登入登出啦

## props

- `:mask-closable` 
    - ```css
      :mask-closable="false" 
- `preset`  modal預設類型
    - 按照preset類型，可以個別套用 n-dialog、 n-card 的 props 和 slots


<br><br><br>

# n-message
我討厭這個他規則好多

### 傳送訊息

- 沒有圖標的訊息
  ```js
        message.success("Cancel", { showIcon: false });
  ```
- 可關閉的訊息
  ```js  
    message.info("I don't know why", {
      closable: true,
      duration: 5e3
    });
    ```
    
- 五秒後關閉的訊息 
  ```js
    message.loading("", { duration: 5000 });

  ```