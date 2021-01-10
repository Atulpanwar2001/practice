package practice;

public class practice {
	public static void kadane_algoritm(int arr[] )
	{
		int local_max=0;
		int global_max=0;
		for(int i=0;i<arr.length;i++)
		{
			local_max=local_max+arr[i];
			if(local_max>global_max)
			{
				global_max=local_max;
				
			}
			if(local_max<0)
			{
				local_max=0;
			}
		}
     System.out.print(global_max);
	}


	public static void main(String args[])
	{
		int arr[]= {2,3,4,-1,-2,1,-3};
		kadane_algoritm(arr);
		    	
	}
}
