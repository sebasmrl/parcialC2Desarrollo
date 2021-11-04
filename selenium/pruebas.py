from selenium import webdriver
from selenium.webdriver.common.by import By
import time



controlador = webdriver.Chrome(executable_path=r"C:\proyectos\python\universidad\PARCIALC2-2021-2\parcialC2-desarrollo\selenium\driver\chromedriver.exe")
controlador.get("C:/proyectos/python/universidad/PARCIALC2-2021-2/parcialC2-desarrollo/calcularSueldoApp/index.html")
controlador.maximize_window()
time.sleep(2)

nom = controlador.find_element_by_id("nom")
nom.send_keys("Sebastián | Luis")
time.sleep(2)

ape = controlador.find_element_by_id("ape")
ape.send_keys("Morales | Vásquez")
time.sleep(2)

iden = controlador.find_element_by_id("iden")
iden.send_keys(4656455774587)
time.sleep(2)

htrab = controlador.find_element_by_id("num1")
htrab.send_keys(8)
time.sleep(2)

vhtrab = controlador.find_element_by_id("num2")
vhtrab.send_keys(17000)
time.sleep(2)

boton = controlador.find_element(By.ID, 'bcalc')
boton.click()
time.sleep(2)

print("fin pruebas automatizadas")
controlador.quit()