package com.Login.table;

import java.sql.*;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.Register.pojo.JdbcCode;

public class Showtable 
{
	public static ResultSet code1() throws ClassNotFoundException, SQLException
	{
		Connection con=JdbcCode.boiler();
		String sql="select * from product";
		PreparedStatement pst=con.prepareStatement(sql);
		ResultSet rs=pst.executeQuery();
		return rs;
	}
}
