#include <stdio.h>
int pulse_str(const char *str)
{
    // cette foncion prend un pointer en paramettre , le pointer est un outil en C qui permet de stocker l'adress vers une variable,
    // il est aussi utiliser pour parcourir un tableau par c'est indice 0 1 2 3....  et ce qui est interessant c'est que le nom d,un tableau en C represnte un pointer indiquant
    // que le premier element du tableau en quesion. donct dans "bojourjndkjsnkjnsdkjd" le b est l'element d'indice 0 et apres les autre element sont claser dans le tableau au indice 1 244
    // On parcour de tableau et on affiche
    for (int i = 0; str[i] != '\0'; i++)
    {
        printf("\n A l'indice %d on a = %c ", i, str[i]);
    }
    return 0;
}
int main()
{
    pulse_str("bojourjndkjsnkjnsdkjd");
}