# LeetCode solution and test using JavaScript
[![Build Status](https://travis-ci.com/zhenyi2697/leetcode-js.svg?branch=master)](https://travis-ci.com/zhenyi2697/leetcode-js)
[![Coverage Status](https://coveralls.io/repos/github/zhenyi2697/leetcode-js/badge.svg?branch=master)](https://coveralls.io/github/zhenyi2697/leetcode-js?branch=master)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)

## Why this repo ?
This is my personal training project for LeetCode. As a FullStack developer, I want to practice the lastest feature of JavaScript. I also want to provide test cases for each question, which is missing in many similar projects.

## Common data structures & API
| Data Structure | Java | JavaScript | Examples |
|:---:|:---:|:---:|:---:|
|array|T[] dirs = new T[5];|new Array(5)|[array.js](https://github.com/zhenyi2697/leetcode-js/blob/master/data-structures/array.js)|
|dynamic array|ArrayList<T>|[]||
|list|LinkedList<T>|N/A||
|OrderedSet<br>OrderedMap|TreeSet<T><br>TreeMap<T1, T2>|N/A||
|HashSet<br>HashMap|HashSet<T><br>HashMap<T1, T2>|Set()<br>Map()||
|heap|PriorityQueue<T>|N/A||
|queue<br>deque|Queue<T><br>Deque<T>|[] with push, pop, shift & unshift||
|stack|Stack<T>|[] with push & pop||
|pair<br>tuple|N/A|Destructuring from object||
|customized|class|class||

## Solved problems
| # | Title | Solution | Tests | Difficulty |
|:---:|:---:|:---:|:---:|:---:|
| 1 | [Two Sum](https://leetcode.com/problems/two-sum/) | [JavaScript](https://github.com/zhenyi2697/leetcode-js/blob/master/leetcode/001-Two-Sum/two-sum.js) | [Jest](https://github.com/zhenyi2697/leetcode-js/blob/master/leetcode/001-Two-Sum/two-sum.test.js) | Easy |
| 2 | [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/) | [JavaScript](https://github.com/zhenyi2697/leetcode-js/blob/master/leetcode/002-Add-Two-Numbers/add-two-numbers.js) | [Jest](https://github.com/zhenyi2697/leetcode-js/blob/master/leetcode/002-Add-Two-Numbers/add-two-numbers.test.js) | Medium |
| 3 | [Longest Substring Without Reating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | [JavaScript](https://github.com/zhenyi2697/leetcode-js/blob/master/leetcode/003-Longest-Substring-Without-Reating-Characters/longest-substring-without-reapeating-characters.js) | [Jest](https://github.com/zhenyi2697/leetcode-js/blob/master/leetcode/003-Longest-Substring-Without-Reating-Characters/longest-substring-without-reapeating-characters.test.js) | Medium |
| 7 | [Reverse Integer](https://leetcode.com/problems/reverse-integer/) | [JavaScript](https://github.com/zhenyi2697/leetcode-js/blob/master/leetcode/007-Reverse-Integer/reverse-integer.js) | [Jest](https://github.com/zhenyi2697/leetcode-js/blob/master/leetcode/007-Reverse-Integer/reverse-integer.test.js) | Easy |
| 9 | [Palindrome Number](https://leetcode.com/problems/palindrome-number/) | [JavaScript](https://github.com/zhenyi2697/leetcode-js/blob/master/leetcode/009-Palindrome-Number/palindrome-number.js) | [Jest](https://github.com/zhenyi2697/leetcode-js/blob/master/leetcode/009-Palindrome-Number/palindrome-number.test.js) | Easy |
| 13 | [Roman To Integer](https://leetcode.com/problems/roman-to-integer/) | [JavaScript](https://github.com/zhenyi2697/leetcode-js/blob/master/leetcode/013-Roman-To-Integer/roman-to-integer.js) | [Jest](https://github.com/zhenyi2697/leetcode-js/blob/master/leetcode/013-Roman-To-Integer/roman-to-integer.test.js) | Easy |
| 14 | [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/) | [JavaScript](https://github.com/zhenyi2697/leetcode-js/blob/master/leetcode/014-Longest-Common-Prefix/longest-common-prefix.js) | [Jest](https://github.com/zhenyi2697/leetcode-js/blob/master/leetcode/014-Longest-Common-Prefix/longest-common-prefix.test.js) | Easy |
| 20 | [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) | [JavaScript](https://github.com/zhenyi2697/leetcode-js/blob/master/leetcode/020-Valid-Parentheses/valid-parentheses.js) | [Jest](https://github.com/zhenyi2697/leetcode-js/blob/master/leetcode/020-Valid-Parentheses/valid-parentheses.test.js) | Easy |
| 21 | [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) | [JavaScript](https://github.com/zhenyi2697/leetcode-js/blob/master/leetcode/021-Merge-Two-Sorted-Lists/merge-two-sorted-lists.js) | [Jest](https://github.com/zhenyi2697/leetcode-js/blob/master/leetcode/021-Merge-Two-Sorted-Lists/merge-two-sorted-lists.test.js) | Easy |
| 26 | [Remove Duplicates From Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) | [JavaScript](https://github.com/zhenyi2697/leetcode-js/blob/master/leetcode/026-Remove-Duplicates-From-Sorted-Array/remove-duplicates-from-sorted-array.js) | [Jest](https://github.com/zhenyi2697/leetcode-js/blob/master/leetcode/026-Remove-Duplicates-From-Sorted-Array/remove-duplicates-from-sorted-array.test.js) | Easy |
| 27 | [Remove Element](https://leetcode.com/problems/remove-element/) | [JavaScript](https://github.com/zhenyi2697/leetcode-js/blob/master/leetcode/027-Remove-Element/remove-element.js) | [Jest](https://github.com/zhenyi2697/leetcode-js/blob/master/leetcode/027-Remove-Element/remove-element.test.js) | Easy |
| 28 | [Implement Strstr()](https://leetcode.com/problems/implement-strstr/) | [JavaScript](https://github.com/zhenyi2697/leetcode-js/blob/master/leetcode/028-Implement-strStr()/implement-strStr.js) | [Jest](https://github.com/zhenyi2697/leetcode-js/blob/master/leetcode/028-Implement-strStr()/implement-strStr.test.js) | Easy |
| 35 | [Search Insert Position](https://leetcode.com/problems/search-insert-position/) | [JavaScript](https://github.com/zhenyi2697/leetcode-js/blob/master/leetcode/035-Search-Insert-Position/search-insert-position.js) | [Jest](https://github.com/zhenyi2697/leetcode-js/blob/master/leetcode/035-Search-Insert-Position/search-insert-position.test.js) | Easy |
| 38 | [Count And Say](https://leetcode.com/problems/count-and-say/) | [JavaScript](https://github.com/zhenyi2697/leetcode-js/blob/master/leetcode/038-Count-And-Say/count-and-say.js) | [Jest](https://github.com/zhenyi2697/leetcode-js/blob/master/leetcode/038-Count-And-Say/count-and-say.test.js) | Easy |

## LICENSE
MIT