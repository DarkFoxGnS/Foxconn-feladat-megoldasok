CREATE TRIGGER available_trigger ON ServerModels
FOR UPDATE
AS
BEGIN
	IF EXISTS(
		SELECT 1 FROM inserted WHERE Available < 0
	)
	BEGIN
		ROLLBACK TRANSACTION;
		THROW 60000,'Available can not be negative',1;
		RETURN;
	END

	UPDATE ServerModels
	SET ServerModels.LastUpdate = GETDATE()
	FROM ServerModels
	INNER JOIN inserted ON inserted.ModellD = ServerModels.ModellD
	INNER JOIN deleted ON deleted.ModellD = ServerModels.ModellD
	WHERE inserted.Available != deleted.Available;
END