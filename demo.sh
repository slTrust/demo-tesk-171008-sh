if [ -d $1 ]; then 
  exit 
  else
    mkdir $1
    cd $1 
    mkdir css js
    touch  index.html  css/index.css  js/main.js
    echo ' h1{color: red;}'>'css/index.css'
    echo -e 'var string = "Hello World" \n alert(string)'>'js/main.js'
    echo -e '<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>'>'index.html'
    exit
  fi
fi
