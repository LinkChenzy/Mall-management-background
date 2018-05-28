# Mall-management-background

## 环境依赖
安装 nodejs v6.12.3版本
>window环境下载 [node-v6.12.3-x64.msi](https://nodejs.org/dist/v6.12.3/)<br>
安装 yarn <br>
>使用npm安装yarn   npm install -g yarn

## 项目初始化
安装依赖包： yarn <br>
>生成package.json文件
#### yarn简单的命令行使用
a.初始化 <br>
  yarn init <br> 
b.安装依赖包 <br>
  yarn add xxx@xxx <br>
  yarn add xxx@xxx --dev <br>
c.卸载依赖包 <br>
  yarn remove xxx <br>


## 开发模式运行
yarn run dev    //浏览器上地址栏上输入localhost:9000

## 线上打包
#### Mac和Linux
yarn run dist

#### window
yarn run dist_win