import pyodbc
import random
import names
import reader
from random_word import RandomWords
r = RandomWords() 

conn = pyodbc.connect('Driver={SQL Server};'
                      'Server=JUSTIN_PC\SQLEXPRESS;'
                      'Database=testDB;'
                      'Trusted_Connection=yes;')

#################################RETRIEVE###############################

cursor = conn.cursor()
cursor.execute('SELECT * FROM dbo.Customer')

for i in cursor:
    print(i)

##################################INSERT################################

#cursor = conn.cursor()
#object = ['chair', 'table', 'stool', 'desk', 'lamp', 'bed frame', 'headboard', 'light', 'beer glass', 'phone'
#         , 'shoe', 'dog bed', 'computer', 'printer', 'paper']
#vendor = ['walmart', 'nike', 'zumiez', 'macy\'s', 'aftermath', 'microsoft', 'samsung', 'furniture warehouse']
#x = 1
#for i in range(len(object) * 5):
#    name = str(random.choice(object))
#    prodprice = random.randint(100, 1000)
#    vendid = random.randint(1, 8)
#    sqlcommand = ("insert into testtbl (prodid,prodname,prodprice,vendorid) values (?,?,?,?)") 
#    values = [x,name,prodprice,vendid]
#    cursor.execute(sqlcommand,values)
#    print(sqlcommand, values)
#    conn.commit()  
    
    #x += 1
#cursor = conn.cursor()
#list2 = reader.main()
#x = 1
#for i in range(len(list2)):
#    date = list2[0]
#    locate = list2[1]
#    custName = list2[2]
#    itemName = list2[3]
#    quantity = list2[4]
#    indivPrice = list2[5]
#    totalPrice = list2[6]
#    sqlcommand = ("insert into Customer (custID, date, locate, custName, itemName, quantity, indivPrice, totalPrice) values (?, ?, ?, ?, ?, ?, ?, ?)")
#    values = [x,date,locate,custName,itemName,quantity,indivPrice,totalPrice]
#    cursor.execute(sqlcommand,values)
#    print(sqlcommand, values)
#    conn.commit()
    
#    x += 1
##################################DELETE################################

#cursor = conn.cursor()
#num = cursor.execute('SELECT COUNT(*) FROM dbo.testTBL')
#num = num.fetchone()[0]
#print(str(int(num)) + " Records deleted")
#for i in range(int(num) + 1):
#     SQLCommand = ("DELETE FROM testTBL WHERE prodID = " + str(i) + "")
#     cursor.execute(SQLCommand)
#     conn.commit()

##################################CREATE TABLE################################

# cursor = conn.cursor()
# tableName = "Customer"
# primaryKey = "custID int NOT NULL PRIMARY KEY,\n"
# itemName = "custName varchar (35),\n"
# itemNumber = "phoneNumber bigint check (phoneNumber BETWEEN 0000000000 AND 9999999999)\n"
# create = ("CREATE TABLE " + tableName + " (\n" 
#         + primaryKey
#         + itemName
#         + itemNumber 
#         + ");")
# print(create)
# cursor.execute(create)
# conn.commit()

# cursor = conn.cursor()
# tableName = "Customer"
# custID = "custID int NOT NULL PRIMARY KEY,\n"
# date = "date datetime,\n"
# locate = "locate varchar (15),\n"
# custName = "custName varchar (35),\n"
# itemName = "itemName varchar (35),\n"
# quantity = "quantity int,\n"
# indivPrice = "indivPrice decimal,\n"
# totalPrice = "totalPrice decimal\n"
# create = ("CREATE TABLE " + tableName + " (\n" 
#          + custID
#          + date
#          + locate
#          + custName
#          + itemName
#          + quantity
#          + indivPrice
#          + totalPrice
#          + ");")
# print(create)
# cursor.execute(create)
# conn.commit()

# cursor = conn.cursor()
# list2 = reader.main()
# x = 1
# for i in range(len(list2)):
#     date = list2[i][0]
#     locate = list2[i][1]
#     custName = list2[i][2]
#     itemName = list2[i][3]
#     quantity = list2[i][4]
#     indivPrice = list2[i][5]
#     totalPrice = list2[i][6]
#     sqlcommand = ("insert into Customer (custID, date, locate, custName, itemName, quantity, indivPrice, totalPrice) values (?,?,?,?,?,?,?,?)")
#     values = [x,date,locate,custName,itemName,quantity,indivPrice,totalPrice]
#     cursor.execute(sqlcommand,values)
#     print(sqlcommand, values)
#     conn.commit()
    
#     x += 1