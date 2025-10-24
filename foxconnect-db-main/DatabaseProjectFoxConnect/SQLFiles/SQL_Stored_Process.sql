CREATE PROCEDURE SP_ProcessOrder (@OrderID INT) AS
IF EXISTS (
	SELECT 1 FROM Orders INNER JOIN ServerModels ON Orders.ModelID = ServerModels.ModellD WHERE Orders.OrderID = @OrderID AND Processed = 0 AND ServerModels.Available >= Orders.OrderQty
)
BEGIN
	UPDATE Orders SET Processed = 1 where Orders.OrderID = @OrderID;
	Update ServerModels SET Available = Available-Orders.OrderQty FROM ServerModels INNER JOIN Orders ON ServerModels.ModellD = Orders.ModelID WHERE Orders.OrderID = @OrderID;
END
GO