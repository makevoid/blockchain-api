# you need to run this command first: 
#
#     npm install 
#
# then you can use:
#
#     sh build.sh


browserify -t coffeeify index.coffee -o build.js

