#include<iostream>
#include<conio.h>
#include<math.h>
using namespace std;
float f(float x)
{
 return ((3*x)-cos(x)-1);
}

float df(float x)
{
 return (3+sin(x));
}


int main()
{

 float x0,itr;double acc;
 cout<<"\nEnter x0: ";
 cin>> x0;
 cout<<"\nEnter Iterations: ";
 cin>>itr;
 cout<<"\nEnter Accuracy: ";
 cin>>acc;


 for(int i=1;i<=itr;i++)
 {
  float h=f(x0)/df(x0);
  float x1=x0-h;

  if(fabs(h)<acc)
  {
   cout<<"\nRoot obtained is: "<<x1;
   break;
  }
  else
  x0=x1;
 }

getch();
return 0;
}







