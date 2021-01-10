package practice;

public class practice {
	public static void union(int arr1 [],int arr2[],int union[],int i,int j,int k)
	{  
		if(i!=arr1.length&&j!=arr2.length)
		{
		if(arr1[i]<arr2[j])
		{
			union[k]=arr1[i];  i++;   k++;
		}
		else if(arr1[i]>arr2[j])
		{
			union[k]=arr2[j];  j++;  k++;
		}
		else
		{
			union[k]=arr1[i];  i++;  j++;  k++;
		}
		union(arr1,arr2,union,i,j,k);
		}
		else
		{
			if(i!=arr1.length) 
			{
					union[k]=arr1[i]; k++;  i++;
					union(arr1,arr2,union,i,j,k);
			}
			else if(j!=arr2.length)
			{
				union[k]=arr2[j];  k++;  j++;
				union(arr1,arr2,union,i,j,k);
			}
			else
			{   System.out.println("Union is ");
				for(int l=0;l<k;l++)
				{
					System.out.print(union[l]);
				}
			}
		}
	}

	public static void main(String args[])
	{
		    	int arr1[]= {1,3,5,7,9};
		    	int arr2[]= {2,3,4,5,7};
		    	int a=arr1.length+arr2.length;
		    	int uni[] =new int [a];
		    	int i=0,j=0,k=0;
		    	union(arr1,arr2,uni,i,j,k);
		    	
		    	
	}
}
