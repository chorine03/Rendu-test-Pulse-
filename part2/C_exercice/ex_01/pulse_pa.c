#include <stdio.h>
int pulse_pa(void)
{
    // Ici J'affiche les alphabet en minuscule

    // alphabet ci desous defini est une variable de type caractere  c'est a dire ca ne peu que contenir les chose comme "a", "b", " ", "1" pas les mot ou beaucoup de caracteres coller
    char alphabet;
    //ici je parcour la liste alphabetique comme si c'etait une suite de nombre le C connais aussi l'alphabet comme l'orde numerique. c'est jusque une boucle habituelle
    for (alphabet = 'a'; alphabet <= 'z'; ++alphabet)
    // le printf permet d'afficher un peu comme echo en php et c'est tout, veille enlerver les comment avant la presnetation
        printf("%c ", alphabet);
    return 0;
}
int main()
{
    // ici c'est le lieu d'appele de la fonction ecrite en haut, en c il y a une function main ou l'on doit appeler les function que l'on veut voir en action, un peut comme le point de sortir de l'application, c'est le meme chema partout
    pulse_pa();
}
