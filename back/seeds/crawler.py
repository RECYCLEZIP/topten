from selenium import webdriver
from selenium.webdriver.common.by import By
from time import sleep
import json

options = webdriver.ChromeOptions()
options.add_argument('window-size=1920,1080')
driver = webdriver.Chrome(executable_path="/Users/yanghaechan/vscode_workspace/elice_project/ai-project/seeds/chromedriver", options=options)

robot_locations = {}
for i in range(1, 26):
    driver.get(f"https://www.superbin.co.kr/new/contents/location_list.php?skey=&sval=&scode1=01&pg={i}")
    print(f"===========현재 {i}페이지 입니다.===========")
    sleep(1)
    for liTag in driver.find_elements(by=By.CSS_SELECTOR, value="#nep_location > ul > li"):
        title = liTag.find_element_by_css_selector('div > p.lc_txt > strong').text
        address = liTag.find_element_by_css_selector('div > p.lc_txt > a > span').text
        print(title, address)
        robot_locations[title] = address
    sleep(2)

driver.quit()
print("result >>", robot_locations)
print("크롤링 종료.")

file_path = "./robot_location.json"
with open(file_path, 'w', encoding='utf-8') as f:
    json.dump(robot_locations, f, ensure_ascii=False)