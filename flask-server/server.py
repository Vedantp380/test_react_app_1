from flask import Flask;
from flask import current_app,jsonify,request,Blueprint;
import os
import urllib.parse 
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask import Flask, flash, request, redirect, url_for, session,json
from werkzeug.utils import secure_filename
from flask_cors import CORS, cross_origin
import logging
import pyodbc
import pandas as pd
from pyspark import *

# cnxn = pyodbc.connect(r'Driver=SQL Server;Server=.\ARCSDAPNJ001\US1GIS,1435;Database=test_vs;Trusted_Connection=yes;')
# cursor = cnxn.cursor()
# cursor.execute("SELECT * FROM [dbo].[STUDENTS]")

logging.basicConfig(level=logging.INFO)

logger = logging.getLogger('HELLO WORLD')

# params = urllib.parse.quote_plus("DRIVER={SQL Server};SERVER=sqlhost.database.windows.net;DATABASE=pythonSQL;UID=username@sqldb;PWD=password56789")






# UPLOAD_FOLDER = "C:\\Users\\pandeyv1581\\OneDrive - ARCADIS\\Documents\\Timesheets"
# ALLOWED_EXTENSIONS = set(['xlsx','xlsm','csv'])

app = Flask(__name__)

# app.config['SECRET_KEY'] = 'supersecret'
# app.config['SQLALCHEMY_DATABASE_URI'] = "mssql+pyodbc:///?odbc_connect=%s" % params
# app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True

# extensions
# db = SQLAlchemy(app)




@app.route('/upload', methods=['POST'])

def fileuplaod():

        data = request.data
        file_paths_str = data.decode()
        file_path_list = json.loads(file_paths_str)
        for file_url, sheet_names in file_path_list.items():
                response = request.get(file_url)
                file_content = response.content

                for sheet_name in sheet_names:
                        df = pd.read_excel(file_content, sheet_name=sheet_name)
                        print(df)
        return file_paths_str

if __name__ == "__main__":
        app.run(debug=True)