package com.Login.pojo;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.Register.pojo.JdbcCode;

public class Dao 
{
	public static ResultSet code(String email,String password) throws ClassNotFoundException, SQLException
	{
		Connection con=JdbcCode.boiler();
		String sql="select * from details where email=? and password=?";
		PreparedStatement pst=con.prepareStatement(sql);
		pst.setString(1,email);
		pst.setString(2,password);
		ResultSet rs=pst.executeQuery();
		return rs;
	}
}
