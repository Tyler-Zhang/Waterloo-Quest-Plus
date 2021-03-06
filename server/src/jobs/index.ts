import * as cron from 'node-cron';
import { Container } from 'typedi';
import { RescrapeProfessorsJob } from './RescrapeProfressorsJob';

export function startJobs() {
  cron.schedule('0 3 * * *', () => Container.get(RescrapeProfessorsJob).run(), true);
}
