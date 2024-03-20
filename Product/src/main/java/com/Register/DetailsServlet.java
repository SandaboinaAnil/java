package com.Register;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import com.Register.entity.user;
import com.Register.pojo.JdbcCode;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
@WebServlet("/re")
public class DetailsServlet extends HttpServlet
{

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/html");
		PrintWriter out=resp.getWriter();
		String fname=req.getParameter("fname");
		String lname=req.getParameter("lname");
		String gender=req.getParameter("gender");
		String email=req.getParameter("email");
		String password=req.getParameter("password");
		user u=new user();
		u.setFname(fname);
		u.setLname(lname);
		u.setGender(gender);
		u.setEmail(email);
		u.setPassword(password);
		try {
			int rows=JdbcCode.code(u);
			if(rows>0)
			{
				out.println("inserted successfully"+rows);
			}
			else
			{
				out.println("try again");
			}
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
}
