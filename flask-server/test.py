import pandas as pd
from flask import Flask, flash, request, redirect, url_for, session,json

# ?df = pd.read_excel("C:\\Users\\pandeyv1581\\OneDrive - ARCADIS\\Desktop\\uploadfiles\\Book1 - Copy.xlsx", sheet_name="Sheet1")

x_dict = {"C:/Users/pandeyv1581/OneDrive - ARCADIS/Desktop/uploadfiles/Book1 - Copy.xlsx"
: ['Student Marks'],
"C:/Users/pandeyv1581/OneDrive - ARCADIS/Desktop/uploadfiles/Book1.xlsx"
: ['Sheet2', 'Sheet3'],
"C:/Users/pandeyv1581/OneDrive - ARCADIS/Desktop/uploadfiles/Book2.xlsx"
: ['Sheet1']}


for file_url, sheet_names in x_dict.items():
        response = request.get(file_url)
        file_content = response.content

        for sheet_name in sheet_names:
                df = pd.read_excel(file_content, sheet_name=sheet_name)
                print(df)