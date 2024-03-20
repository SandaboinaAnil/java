package com.Register.pojo;

import java.sql.*;

import com.Register.entity.user;

public class JdbcCode 
{
	public static Connection boiler() throws ClassNotFoundException, SQLException
	{
		String url="jdbc:mysql://localhost:3306/ch15";
		String u="root",p="root";
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection con=DriverManager.getConnection(url, u, p);
		return con;
	}
	public static int code(user u) throws ClassNotFoundException, SQLException
	{
		Connection con=boiler();
		String sql="insert into details values(?,?,?,?,?)";
		PreparedStatement pst=con.prepareStatement(sql);
		pst.setString(1,u.getFname());
		pst.setString(2,u.getLname());
		pst.setString(3,u.getGender());
		pst.setString(4,u.getEmail());
		pst.setString(5,u.getPassword());
		int rows=pst.executeUpdate();
		return rows;
	}
}
