#include <stdio.h>

int main(){

    int myNums[] = {25,50,75,100};
    int length = sizeof(myNums) / sizeof(myNums[0]);
    
    for (int i = 0; i < length; i++){
        printf("%d\n", myNums[i]);
    }



    int nums[2][3] = {
        {1,4,2},
        {3,6,8}
    };

    for (int i = 0; i < 2; i++){
        for (int j = 0; j < 3; j++){
            printf("%d",nums[i][j]);
        }
        printf("\n");
    }


    
    char greet[] = "Hello World";
    printf("%s", greet);


    return 0;
}