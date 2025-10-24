CREATE TABLE [dbo].[Orders] (
    [OrderID]             INT           IDENTITY (1, 1) NOT NULL,
    [ModelID]             INT           NULL,
    [CustomerCompanyName] VARCHAR (100) NULL,
    [OrderQty]            INT           NULL,
    [OrderDate]           DATETIME      NULL,
    [DeadlineDate]        DATETIME      NULL,
    [Processed]           BIT           NULL
);
GO

ALTER TABLE [dbo].[Orders]
    ADD CONSTRAINT [DF_Orders_Processed] DEFAULT ((0)) FOR [Processed];
GO

ALTER TABLE [dbo].[Orders]
    ADD CONSTRAINT [DF_Orders_OrderDate] DEFAULT (getdate()) FOR [OrderDate];
GO

ALTER TABLE [dbo].[Orders]
    ADD CONSTRAINT [PK_Orders] PRIMARY KEY CLUSTERED ([OrderID] ASC);
GO

ALTER TABLE [dbo].[Orders]
    ADD CONSTRAINT [FK_Orders_ServerModels] FOREIGN KEY ([ModelID]) REFERENCES [dbo].[ServerModels] ([ModellD]);
GO

