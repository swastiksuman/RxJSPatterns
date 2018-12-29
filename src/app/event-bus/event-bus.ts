
export const ADD_NEW_EMPLOYEE = 'ADD_NEW_EMPLOYEE';
export const EMPLOYEE_LIST_AVAILABLE = 'NEW_LIST_AVAILABLE';

export interface Observer {
  notify(data: any);
}

interface Subject {
  registerObserver(eventType: string, obs: Observer);
  unregisterObserver(eventType: string, obs: Observer);
  notifyObserver(eventType: string, data: any);
}

class EventBus implements Subject {
  private observers: {[key: string]: Observer[] } = {};
  registerObserver(eventType: string, obs: Observer) {
    this.observersPerEventType(eventType).push(obs);
  }
  unregisterObserver(eventType: string, obs: Observer) {
    this.observersPerEventType(eventType).splice(this.observersPerEventType(eventType).findIndex((data) => data === obs), 1);
  }
  notifyObserver(eventType: string, data: any) {
    this.observersPerEventType(eventType).forEach((obs) => {
      obs.notify(data);
    });
  }

  private observersPerEventType(eventType: string) {
    const observersPerType = this.observers[eventType];
    if (!observersPerType) {
      this.observers[eventType] = [];
    }
    return this.observers[eventType];
  }
}

export const globalEventBus = new EventBus();
