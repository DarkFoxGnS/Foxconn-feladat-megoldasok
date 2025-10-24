USE msdb ;
GO
EXEC dbo.sp_add_job @job_name = N'Job_OverdueDeadlinesAlert' ;
GO
EXEC sp_add_jobstep
    @job_name = N'Job_OverdueDeadlinesAlert',
    @step_name = N'Collect Overdue Deadlines',
    @subsystem = N'TSQL',
    @command = N'
    IF EXISTS (
    SELECT * FROM sys.tables
    WHERE name LIKE ''OverdueOrders%''
    )
    DROP TABLE OverdueOrders;
    CREATE TABLE OverdueOrders (OrderID INT, CustomerCompanyName VARCHAR(100),DeadlineDate DATETIME);
    INSERT INTO OverdueOrders (OrderID, CustomerCompanyName, DeadlineDate)
    SELECT OrderID, CustomerCompanyName, DeadlineDate
    FROM Orders
    WHERE DeadlineDate < GETDATE() AND Processed = 0;
    ',
    @retry_attempts = 5,
    @retry_interval = 5 ;
GO
EXEC dbo.sp_add_schedule
    @schedule_name = N'RunOnce',
    @freq_type = 1,
    @active_start_time = 080000 ;
GO
EXEC sp_attach_schedule
    @job_name = N'Job_OverdueDeadlinesAlert',
    @schedule_name = N'RunOnce';
GO
EXEC dbo.sp_add_jobserver @job_name = N'Job_OverdueDeadlinesAlert';
GO