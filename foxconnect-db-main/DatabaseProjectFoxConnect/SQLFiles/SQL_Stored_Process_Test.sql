EXEC SP_ProcessOrder 2;
SELECT * from Orders Inner join ServerModels on ModellD = ModelID Where Orders.OrderID = 2;