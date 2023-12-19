class College
{
	public static void main(String args[])
	{
		String college="Kakathiya university";
		String course="b.te";
		String branch="civil";
		System.out.println(college);
		if(course=="b.tech")
		{
			if(branch=="ece")
			{
				System.out.println("four years");
				System.out.println("fee 1lakh");
				System.out.println("shcolorship:10,000");
			}
			else if(branch=="cse")
			{
				System.out.println("four years");
				System.out.println("fee 2lakh");
				System.out.println("shcolorship:8,000");
			}
			else if(branch=="civil")
			{
				System.out.println("four years");
				System.out.println("fee 1.5lakh");
				System.out.println("shcolorship:9,000");
			}
			else if(branch=="mech")
			{
				System.out.println("four years");
				System.out.println("fee 1.2lakh");
				System.out.println("shcolorship:12,000");
			}
			else if(branch=="eee")
			{
				System.out.println("four years");
				System.out.println("fee 1.8lakh");
				System.out.println("shcolorship:7,000");
			}
			else if(branch=="it")
			{
				System.out.println("four years");
				System.out.println("fee 1.6lakh");
				System.out.println("shcolorship:5,000");
			}
			else
			{
				System.out.println("course is not available");
			}
		}
		else
		{
			 if(branch=="b.sc")
			{
				System.out.println("three years");
				System.out.println("fee 50thousand");
				System.out.println("shcolorship:4,000");
			}
			else if(branch=="b.com")
			{
				System.out.println("three years");
				System.out.println("fee 40thousand");
				System.out.println("shcolorship:5,000");
			}
			else if(branch=="ba")
			{
				System.out.println("three years");
				System.out.println("fee 30thousand");
				System.out.println("shcolorship:4,500");
			}
			else
			{
				System.out.println("course is not available");
			}


		}
	}
}