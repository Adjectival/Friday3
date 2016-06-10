# _Ping Pong by Number_

#### _Ping Pong number classifier, 10 June 2016_

#### By _Alexander Jacks_

## Description

_Ping Pong JS game. This web application will display a range of numbers after user types a number for input and clicks the Play button. Range of numbers runs from 1 until the input, with numbers up to five digits allowed._
_Replays without reloading page are allowed; the previous input is discarded and a new range of numbers (and usually some words) is displayed._

## Specifications

* _If user input is not a number, error message is alerted._
  * **Example Input:** five
  * **Example Output:** "Please enter a number between 99999 and 1"

* _If user input is zero or 0, error message is alerted._
  * **Example Input:** 0
  * **Example Output:** "Please enter a number between 99999 and 1"

* _Numbers in range divisible by 3 are replaced with "ping" and displayed in order._
  * **Example Input:** 3
  * **Example Output:** 1,2,ping
* _Numbers in range divisible by 5 are also replaced with "pong" and displayed in order._
  * **Example Input:** 12
  * **Example Output:** 1,2,ping,4,pong,ping,7,8,ping,pong,11,ping
* _Numbers in range divisible by 15 are replaced with "ping-pong" and displayed in order._
  * **Example Input:** 34
  * **Example Output:** ...,28,29,ping-pong,31,32,ping,34

* _If user clicks Play button after replacing input with new value, range of numbers and substituted words is re-calculated and displayed instead of the earlier result._
  * **Example Input:** 5
  * **Example Output:** 1,2,ping,4,pong

## Support and contact details

_Contact alexd (dot) jacks (at) gmail (dot) com with questions regarding this software. Check out some of these resources to understand the technologies._

* _learnhowtoprogram.com * w3schools.com * getbootstrap.com * jquery.com_

## Technologies Used

_JavaScript, jQuery, Bootstrap_


### Legal

_This software is available under the MIT license and can be modified and used for any purposes without express permission of the author._

Copyright (c) 2016 **_Alexander Jacks_**
