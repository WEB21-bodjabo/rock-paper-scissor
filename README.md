# rock-paper-scissor

гравець буде грати проти комп’ютера. Всього буде 10 ходів. Гравець повинен вибрати один варіант серед каменю, паперу та ножиць. З боку комп’ютера буде згенеровано випадковий варіант, і той, хто виграє, щоразу отримує один бал. Після закінчення 10 ходів остаточний результат буде відображено на екрані з кнопкою перезапуску гри. Гра буде повністю адаптивною, тому в неї можна буде грати на будь-якому пристрої.


Div із заголовком класу використовується для відображення заголовка на екрані.
Div з оцінкою класу містить ще два div, які відображатимуть оцінку гравця та комп’ютера.
Div із ходом класу лише відображає текст, а div із ходом класу вліво покаже кількість ходів, що залишилися до завершення гри.
Div з опцією класу містить три кнопки «камінь», «папір» і «ножиці», за допомогою яких користувач може вводити дані.
Div з результатом класу відображатиме результат кожного ходу та остаточний результат після 10 ходів, а кнопка з перезавантаженням класу дозволить перезавантажити гру.

Створіть функцію game() , яка буде містити всю логіку гри.
Усередині функції оголошують три змінні playerScore , computerScore , ходи, які зберігатимуть записи результатів гравця, результатів комп’ютера та виконаних ходів відповідно .
Створіть функцію playGame() і всередині функції використовуйте маніпуляції DOM, щоб отримати всі три кнопки, які ми створили в HTML для введення гравцем. Створіть масив playerOptions, який міститиме всі три кнопки як елементи. Так само створіть масив для параметрів комп’ютера.
Використовуйте цикл forEach() у playerOptions, щоб ми могли додати прослуховувач подій до всіх кнопок за допомогою єдиного фрагмента коду. Усередині циклу збільшуйте лічильник ходів на 1 відображення рухів ліворуч на екрані шляхом віднімання ходів від 10. Згенеруйте випадкове значення для параметра комп’ютера та порівняйте його з введеними гравцем.
Створіть функцію winner() , яка отримуватиме два аргументи, один — введення гравця, а інший — опцію комп’ютера. Функція вирішуватиме, хто виграє очко серед гравця та комп’ютера.
Створіть функцію gameOver(), яка буде відображати кінцевий результат за допомогою кнопки перезавантаження. Функція буде викликана, коли кількість ходів стане рівною 10.
Викличте функцію playGame() всередині функції game().
Тепер викличте функцію game() у кінці файлу.



A div with the class title is used to display the title on the screen.
A div with a class score contains two more div which will display the score of the player and computer.
Div with the class move just displays a text and div with class movesleft will show the number of moves left before the game ends.
A div with a class option contains three button rock, paper, and scissors which the user can use to give the input.
A div with the class result will display the result of every move and the final result after 10 moves and the button with class reload will allow reloading the game.

[6:45 PM] Богайчук Богдан

Create a function game() that will contain all the logic of the game.
Inside the function declare three variables playerScore, computerScore, moves which will keep the record of the player’s score, computer’s score, and moves completed respectively.
Create a function playGame() and inside the function use DOM manipulation to get hold of all the three buttons we created in HTML for player input. Create an array playerOptions which will contain all three buttons as its elements. Similarly, create an array for computer options.
Use forEach() loop on playerOptions so that we can add an event listener on all buttons with a single piece of code. Inside the loop increment moves counter by 1 display moves left on the screen by subtracting moves from 10. Generate a random value for the computer option and compare it with the player’s input.
Create a function winner() which will receive two arguments one the player’s input and the other the computer’s option  The function will decide who wins the point among the player and computer.
Create a function gameOver() which will display the final result with reload button. The function will be called when moves will become equals to 10.
Call the playGame() function inside the game() function.
Now call the game() function at the end of the file.

