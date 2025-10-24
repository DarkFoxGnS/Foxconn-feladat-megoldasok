CREATE TABLE [dbo].[ServerModels] (
    [ModellD]    INT             IDENTITY (1, 1) NOT NULL,
    [ModelName]  VARCHAR (100)   NULL,
    [BasePrice]  DECIMAL (10, 2) NULL,
    [Available]  INT             NULL,
    [LastUpdate] DATETIME        NULL
);
GO

ALTER TABLE [dbo].[ServerModels]
    ADD CONSTRAINT [DF_ServerModels_LastUpdate] DEFAULT (getdate()) FOR [LastUpdate];
GO

ALTER TABLE [dbo].[ServerModels]
    ADD CONSTRAINT [DF_ServerModels_Available] DEFAULT ((0)) FOR [Available];
GO

ALTER TABLE [dbo].[ServerModels]
    ADD CONSTRAINT [PK_ServerModels] PRIMARY KEY CLUSTERED ([ModellD] ASC);
GO

