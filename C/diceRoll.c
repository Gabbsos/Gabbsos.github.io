#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int main(){

    int numDice;
    printf("How many die would you like to roll? ");

    while (true)
    {
        if (scanf("%d", &numDice) == 0){
            int ch;
            while ((ch = getchar()) != '\n' && ch != EOF);
            printf("Wrong data type! Try again: ");
            continue;
        } else {
            break;
        }
    }

    


    return 0;
}