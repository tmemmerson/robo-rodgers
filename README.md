
# _Robo Rodgers_

  

#### _Turn a number string into "Robo-Rodgers speak"_	

  

#### By _**Tristan Emmerson**_

  

## **Description**

  

_This application will take a user submitted number string and convert that string into an output. That output is initialized as an array with all numbers, starting from 0, and ending with the user inputted number. Within that array of numbers, the digits will be "translated" upon the following rules. Numbers containing 1 will become "Beep!", and numbers containing 2 will become "Boop!", and further, numbers that contain a 3 will become "Won't you be my neighbor?" The rules for translation are in order from first to last. For example, the number 13 will pass the "Beep!" test, but ultimately will be translated to "Won't you be my neighbor", as that rule superceedes the former rule._

## **Specifications**

| Spec 	| Input 	| Output 	|
|-	|-	|-	|
| all non-numeric and non-alphanumeric inputs will be rejected 	| OMGG 99s3!!& &*ROBO 445%% 	| "Please use only numbers. Our robot cannot translate such a complex and foreign alien language." 	|
| take user input and assign to array 	| 13                                                                                                                                	| [0,1,2,3,4,5,6,7,8,9,10,11,12,13] 	|
| take user array and apply first order rule 	| [0,1,2,3,4,5,6,7,8,9,10,11] 	| [0,1,2,"Won't you be my neighbor?",4,5,6,7,8,9,10,11,12,"Won't you be my neighbor?"] 	|
| take user array and apply second order rule 	| [0,1,2,"Won't you be my neighbor?",4,5,6,7,8,9,10,11,12,"Won't you be my neighbor?"] 	| [0,1,"Boop!","Won't you be my neighbor?",4,5,6,7,8,9,10,11,"Boop!","Won't you be my neighbor?"] 	|
| take user array and apply third order rule 	| [0,1,"Boop!","Won't you be my neighbor?",4,5,6,7,8,9,10,11,"Boop!","Won't you be my neighbor?"] 	| [0,"Beep!","Boop!","Won't you be my neighbor?",4,5,6,7,8,9,10,"Beep!","Boop!","Won't you be my neighbor?"] 	|
| take user array after translation and display translated string to user 	| 13                                                                                                                                	| "0,"Beep!","Boop!","Won't you be my neighbor?",4,5,6,7,8,9,10,"Beep!","Boop!","Won't you be my neighbor?" 	|

## **Setup/Installation Requirements**

  

*  _Recommended browser for everything in your life. [Google Chrome](https://www.google.com/chrome/)_.

*  _Github [repository](https://github.com/tmemmerson/robo-rodgers.git)_

*  _Live [demo](https://tmemmerson.github.io/robo-rodgers)_


  

## **Known Bugs**

  

_No Known Bugs **6/12/2020**_

  

## **Support and contact details**

  

_Questions, comments and concerns can be directed to the author(s) [Tristan Emmerson](tristan@stickerslug.com)_

  

## **Technologies Used**

  

_**This project was written in:** [Visual Studio Code](https://code.visualstudio.com/) (v1.45)_

  

## **License**


MIT License
Copyright (c) 2020 **_Tristan Emmerson, Stickerslug Incorporated_**


Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


