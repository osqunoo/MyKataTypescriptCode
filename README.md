# MyKataTypescriptCode
- Refactoring The whole update operations in one function and replace the Main for with forEach
https://github.com/osqunoo/MyKataTypescriptCode/commit/3631d1e0fdf471f2d213aa1f2adddbdb019b1f63
- refactoring MAX_LIMIT and MIN_LIMIT for Quality
https://github.com/osqunoo/MyKataTypescriptCode/commit/5d367cade9a64d768c215e60aa839ddea9727ad2
- Refactoring the assignment for increase and decrease
https://github.com/osqunoo/MyKataTypescriptCode/commit/58df7bff3342c4390f6ba6ab6318077669994e76
- Refactoring the equal == to === because it is faster and compare value and type
https://github.com/osqunoo/MyKataTypescriptCode/commit/3dd726a2e4d181c95b35f2316245f27c91a3e569
- refactoring increase operation in increaseQuality function
https://github.com/osqunoo/MyKataTypescriptCode/commit/d67b6c49a9f56b33af5faed1f7e6cc678e3329c8
- refactoring by adding three function isChees() , isBackstage , and isLegendary
https://github.com/osqunoo/MyKataTypescriptCode/commit/7283c186621a57537f2f54c8000ef89d834538d8
- refactoring if the item is Legandary get out of the loop because no sold out and no changes to quality
https://github.com/osqunoo/MyKataTypescriptCode/commit/4c3c06de9d86a3181a02d7cec97b2bcbad93e1e2
- refactoring decrease quality to a function
https://github.com/osqunoo/MyKataTypescriptCode/commit/4cbbbf7b446d145ecf9900767bdcac9b6372fbca
- refactoring decrease sellin to a function and raise it up in the code and updates the limits
https://github.com/osqunoo/MyKataTypescriptCode/commit/ee9c18967f0cc966893f8c53ae8808e23f37353c
- swap if and else blocks to do more refactoring
https://github.com/osqunoo/MyKataTypescriptCode/commit/9145e83d01c9060776d3c6cdd86cd0ac64226f33
- refactoring the if blocks in SELLIN to minimize the complixity of conditions and return early
https://github.com/osqunoo/MyKataTypescriptCode/commit/c26404c53f78e04f03dce2b9c6d5f5e5de627fb1
- refactoring the condition of expired in a function
https://github.com/osqunoo/MyKataTypescriptCode/commit/1db1204d7453efb2c5382ef0ed31cc1bc8e0024b
- refactoring the operations and the if statement splited by type isChees , isBackstage , and isNormal
https://github.com/osqunoo/MyKataTypescriptCode/commit/fbc6eac1e964eb40342fec5e8ee17e8f4c2f94aa
- refactoring the noraml update into a function
https://github.com/osqunoo/MyKataTypescriptCode/commit/61a394cd7e26d592a554c97feeb84806a8ab7d03
- refactoring the inside block of ischeese and isbackstage
https://github.com/osqunoo/MyKataTypescriptCode/commit/a1bb88ecf78bbf886bc37c428e1146f5dfd3fb07
- exporting functions in seperated files and import it in the proper places
https://github.com/osqunoo/MyKataTypescriptCode/commit/12f597e9b42db56d1824d5aca2ca89128799585e
- removing unneeded spaces
https://github.com/osqunoo/MyKataTypescriptCode/commit/48f3ba8eb8dbff4a63c5bff2042e093ead285aec
- Perform the Strategy Pattern on the Items as create ItemsFamily Interface
https://github.com/osqunoo/MyKataTypescriptCode/commit/ad851019d534665ae2d1886a114422b0348bf0b9

Final Test Result using mocha
----------------|----------|----------|----------|----------|----------------|
File            |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
----------------|----------|----------|----------|----------|----------------|
All files       |    73.13 |    27.27 |    81.25 |    72.31 |                |
 Backstage.ts   |    33.33 |        0 |       50 |    33.33 |... 11,12,14,15 |
 Cheese.ts      |       50 |        0 |       50 |       50 |        6,7,8,9 |
 Legendary.ts   |      100 |      100 |      100 |      100 |                |
 Noraml.ts      |      100 |       50 |      100 |      100 |              5 |
 gilded-rose.ts |    89.29 |       50 |      100 |    88.46 |       20,23,26 |
 operations.ts  |    72.73 |       25 |       75 |    72.73 |          3,4,9 |
----------------|----------|----------|----------|----------|----------------|

After Strategy Pattern

File            |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
----------------|----------|----------|----------|----------|----------------|
All files       |    61.36 |    11.11 |       50 |    58.54 |                |
 Backstage.ts   |       40 |        0 |    33.33 |    35.71 |... 11,13,14,18 |
 Cheese.ts      |    54.55 |        0 |    33.33 |       50 |     6,7,8,9,13 |
 Item.ts        |    68.42 |       25 |      100 |    66.67 |... 22,23,25,26 |
 Legendary.ts   |    71.43 |      100 |    33.33 |    66.67 |            4,7 |
 NormalItem.ts  |    58.33 |    14.29 |    66.67 |    54.55 |     6,7,8,9,15 |
 gilded-rose.ts |      100 |       50 |      100 |      100 |             12 |
 operations.ts  |    41.67 |        0 |        0 |    41.67 |... ,9,13,14,18 |
----------------|----------|----------|----------|----------|----------------|