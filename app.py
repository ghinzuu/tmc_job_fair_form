from flask import Flask, render_template, request
import openpyxl

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # Get form data
        first_name = request.form['first-name']
        last_name = request.form['last-name']
        email = request.form['email']
        phone = request.form['phone']
        locality = request.form['locality']
        bmanager = request.form['business-manager']
        level_of_studies = request.form['level-of-studies']
        languages = request.form.getlist('languages')

        # Open existing Excel file
        workbook = openpyxl.load_workbook('jobFair.xlsx')
        worksheet = workbook.active

        # Append form data to Excel file
        row = [first_name, last_name, email, phone, locality, bmanager, level_of_studies, ', '.join(languages)]
        worksheet.append(row)

        # Save changes to Excel file
        workbook.save('jobFair.xlsx')

        return render_template('index.html')

    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
