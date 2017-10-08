var fs = require('fs')

var dirName = process.argv[2] // 你传的参数是从第 2 个开始的

process.chdir("c:/Users/hjx/Desktop") // cd ~/Desktop  win10 所以加上盘符
 
var dirPath = "./" + dirName;

if(fs.existsSync(dirPath)){
    process.exit(1);
}else{
    fs.mkdirSync(dirPath) // mkdir $1   创建目录
    process.chdir(dirPath) // cd $1     改变目录
    fs.mkdirSync('css') // mkdir css           创建目录
    fs.mkdirSync('js') // mkdir js             创建目录
   
    fs.writeFileSync('./index.html', '<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>', (err) => {
       if (err) throw err;
     });
     fs.writeFileSync('css/style.css', 'h1{color: red;}', (err) => {
       if (err) throw err;
     });
     fs.writeFileSync('./js/main.js', 'var string = "Hello World" \n alert(string)', (err) => {
       if (err) throw err;
     });
   
   
    process.exit(0)
}

