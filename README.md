# Mall-management-background

## 环境依赖
安装 nodejs v6.12.3版本
>window环境下载 [node-v6.12.3-x64.msi](https://nodejs.org/dist/v6.12.3/)
安装 yarn
>使用npm安装yarn   npm install -g yarn

## 项目初始化
安装依赖包： yarn
>生成package.json文件
#### yarn简单的命令行使用
a.初始化
  yarn init 
b.安装依赖包
  yarn add xxx@xxx 
  yarn add xxx@xxx --dev
c.卸载依赖包
  yarn remove xxx

  
## 开发模式运行
yarn run dev    //浏览器上地址栏上输入localhost:9000

## 线上打包
#### Mac和Linux
yarn run dist

#### window
yarn run dist_win