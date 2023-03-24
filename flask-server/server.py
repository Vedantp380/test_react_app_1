from flask import Flask;
from flask import current_app,jsonify,request,Blueprint;
import os
from flask import Flask, flash, request, redirect, url_for, session
from werkzeug.utils import secure_filename
from flask_cors import CORS, cross_origin
import logging

logging.basicConfig(level=logging.INFO)

logger = logging.getLogger('HELLO WORLD')

UPLOAD_FOLDER = "C:\\Users\\pandeyv1581\\OneDrive - ARCADIS\\Documents\\Timesheets"
ALLOWED_EXTENSIONS = set(['xlsx','xlsm','csv'])

fileuplaod = Blueprint('fileupload',__name__)
    
@fileuplaod.route('/upload', methods=['POST'])

def fileuplaod():

        print("request")

        return request

