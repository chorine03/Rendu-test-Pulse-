#include <stdio.h>
#include <string.h>
int pulse_len(const char *str)
{
    // ici il est question du nombre de caractere et non d'afficher le caractere;
    // aussi l'exo demade retourner le resutat et non de l'afficher donc contrairement au autre je ne fait pas print et return 0 main plutot return du nom nombre de caractere "count"
    int count = 0;
    for (int i = 0; i < strlen(str); i++)
    {
        if (str[i] != ' ')
        {
            count++;
        }
    }
    return count;
}
int main()
{
    printf("%d", pulse_len("sdndsndsjksnfkdsnkfj"));
}