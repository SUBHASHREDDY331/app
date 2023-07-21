from hashlib import new
from locale import currency
from multiprocessing.sharedctypes import Value
from tkinter import *
from tkinter import Tk,ttk
from tkinter.font import BOLD
import requests
import json
window=Tk()
window.title('currency converter')
window.geometry('300x330')
window.configure(bg="white")
window.resizable(width=False,height=False)


top=Frame(window,width=300,height=50,bg='red')
top.grid(column=0,row=0)

main=Frame(window,width=300,height=300,bg='white')
main.grid(column=0,row=1)

def convert():
    url = "https://currency-converter18.p.rapidapi.com/api/v1/convert"
    c1=combo1.get()
    c2=combo2.get()
    amount=Value.get()

    querystring = {"from":c1,"to":c2,"amount":amount}

    if c2 == 'USD':
        sy='$'
    elif c2 == 'INR':
        sy = '₹'
    elif c2 == 'EUR':
        sy = '€'
    elif c2 == 'AED':
        sy = 'د.إ'
    elif c2 == 'KWD':
        sy = 'KD'
    headers = {
        "X-RapidAPI-Key": "4137cb8724msh51f3a6b03fd5e15p1764bfjsnaa1a05421a6a",
        "X-RapidAPI-Host": "currency-converter18.p.rapidapi.com"
    }

    response = requests.request("GET", url, headers=headers, params=querystring)

    data=json.loads(response.text)
    z=data['result']['convertedAmount']
    formatted= sy +"{:.2f}".format(z)
    b['text']=formatted
    print(z,formatted)

currency=['INR','USD','EUR', 'AED','KWD']

a=Label(top,text="currency converter",height=0,padx=65,pady=10,anchor='center',font=('Ivy 15 bold'),bg='red')
a.place(x=0,y=0)


b=Label(main,relief=SOLID,height=3,width=20,bg='white',fg='black',font=("Ivy 15 bold"))
b.place(x=40,y=10)


from_l=Label(main,text="From",font=('Ivy 10 bold'))
from_l.place(x=40,y=110)
combo1=ttk.Combobox(main,width=10,font=('Ivy 10 bold'))
combo1['value']=currency
combo1.place(x=40,y=130)


to_l=Label(main,text="To",font=('Ivy 10 bold'))
to_l.place(x=180,y=110)
combo2=ttk.Combobox(main,width=10,font=('Ivy 10 bold'))
combo2['value']=currency
combo2.place(x=180,y=130)


Value=Entry(main,width=20,relief="solid",font=('Ivy 10 bold'))
Value.place(x=70,y=180)

button=Button(main,text="convert",width=20,font=('Ivy 15 bold'),bg='red',command=convert)
button.place(x=23,y=220)


window.mainloop()